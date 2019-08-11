import React from "react";
import "./customization.scss";

import {SketchPicker} from 'react-color'

import BG from "../../../asset/img/tools/desk-texture.jpg"
import BackImage from "../../../asset/img/tools/back-plastic.png"
import FrontImage from "../../../asset/img/tools/front-plastic.png"

class ProductCustomization extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            shape: {
                background: {
                    r: '255',
                    g: '255',
                    b: '255',
                    a: '0.5',
                }
            },
            file: '',
            imagePreviewUrl: ''
        }
    }

    componentDidMount() {
        this.updateCanvas();

    }

    updateCanvas() {
        const me = this;
        const ctx = this.refs.canvas.getContext('2d');


        var base_image = new Image();
        base_image.src = BG;
        base_image.onload = () => {
            ctx.drawImage(base_image, 0, 0, 1920, 800);

            var back_image = new Image();
            back_image.src = BackImage;
            back_image.onload = () => {
                ctx.drawImage(back_image, 600, 20, 600, 750);
                draw_astar_shape();
            };
        };


        function draw_astar_shape() {


            ctx.beginPath();
            ctx.moveTo(602, 32);
            ctx.lineTo(610, 350);
            ctx.lineTo(615, 754);
            ctx.lineTo(1050, 743);
            ctx.lineTo(1180, 746);
            ctx.lineTo(1164, 600);
            ctx.lineTo(1164, 500);
            ctx.lineTo(1166, 25);
            ctx.lineTo(900, 20);
            ctx.lineTo(602, 32);
            ctx.lineTo(750, 90);
            ctx.lineTo(1005, 85);
            ctx.lineTo(1020, 87);
            ctx.lineTo(1030, 90);
            ctx.lineTo(1040, 115);
            ctx.lineTo(1030, 130);
            ctx.lineTo(1025, 136);
            ctx.lineTo(1005, 139);
            ctx.lineTo(750, 145);
            ctx.lineTo(745, 143);
            ctx.lineTo(740, 140);
            ctx.lineTo(730, 130);
            ctx.lineTo(725, 110);
            ctx.lineTo(740, 90);
            ctx.lineTo(750, 90);
            ctx.fillStyle = "rgba(" + me.state.shape.background.r + "," + me.state.shape.background.g + "," + me.state.shape.background.b + "," + me.state.shape.background.a + ")";
            ctx.fill();
            draw_custom_image();
        }

        function draw_custom_image() {
            if (me.state.imagePreviewUrl) {
                var logo = new Image();
                logo.src = me.state.imagePreviewUrl;
                logo.onload = () => {
                    ctx.drawImage(logo, 650, 170, 470, 540);
                    draw_front_layer();
                }
            } else {
                draw_front_layer();
            }
        }

        function draw_front_layer() {
            var front_image = new Image();
            front_image.src = FrontImage;
            front_image.onload = () => {

                ctx.globalAlpha = 1;
                ctx.drawImage(front_image, 600, 20, 600, 750);

            };
        }
    }

    on_background_color_change(color) {
        this.setState({shape: {background: color.rgb}});
        this.updateCanvas();
    }


    on_selected_image(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
            this.updateCanvas();
        }


        reader.readAsDataURL(file)
    }

    render() {

        return (
            <div className="production-customizition-page">
                <div className="filter-box">
                    <SketchPicker
                        color={this.state.shape.background}
                        onChangeComplete={(event) => this.on_background_color_change(event)}/>


                    <form>
                        <input className="fileInput"
                               type="file"
                               onChange={(e) => this.on_selected_image(e)}/>
                    </form>


                </div>
                <div className="preview-frame">
                    <canvas ref="canvas" width={1920} height={800}/>
                </div>
            </div>
        );
    }


}

export default ProductCustomization;