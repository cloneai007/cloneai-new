import React, { Component } from "react";
import "cropperjs/dist/cropper.css";
import Cropper from "react-cropper";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import ResetTvIcon from "@mui/icons-material/ResetTv";
import "./Profile.css";
import { Box, Button } from "@mui/material";

class ImageCropper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: props.image,
      ratio: 1 / 1,
      scale: 1,
      blob: false,
    };

    this.cropper = React.createRef();

    this.uploadFile = this.uploadFile.bind(this);
    this.setdCrop = this.setdCrop.bind(this);
    this.setCrop = this.setCrop.bind(this);
    this.crop = this.crop.bind(this);
    this.rotate = this.rotate.bind(this);
    this.saveImage = this.saveImage.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
  }

  uploadFile(e) {
    this.setState({
      image: e[0].preview,
    });
  }

  setCrop() {
    this.setState((prevState) => ({ scale: prevState.scale + 0.1 }));
  }

  setdCrop() {
    this.setState((prevState) => ({ scale: prevState.scale - 0.1 }));
  }

  rotate(method) {
    const cropper = this.cropper.current.cropper;

    switch (method) {
      case "left":
        cropper.rotate(-90);
        break;
      case "right":
        cropper.rotate(90);
        break;
    }
  }

  crop(e) {
    const { detail } = e;

    this.setState({
      cropWidth: detail.width,
      cropHeight: detail.height,
    });
  }

  saveImage() {
    this.cropper.current.cropper.getCroppedCanvas().toBlob((blob) => {
      this.props.callToUpload(blob);
    });
  }

  handleImageUpload(e) {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const imageDataURL = event.target.result;
        this.setState({ image: imageDataURL });
      };

      reader.readAsDataURL(file);
    }
  }

  render() {
    return (
      <div className="ImageCropper">
        <div className="ImageCropper__preview">
          <img
            className="ImageCropper__preview-img"
            src={this.cropper?.current?.cropper?.getCroppedCanvas().toDataURL()}
          ></img>
        </div>
        <div className="ImageCropper__container">
          {this.state.image && (
            <div style={{ maxWidth: 768 }}>
              <Cropper
                className="Cropper"
                ref={this.cropper}
                src={this.state.image}
                style={{ height: 400, width: "100%" }}
                aspectRatio={this.state.ratio}
                guides={true}
                zoomTo={this.state.scale}
                viewMode={2}
                crop={this.crop}
              />
              <br />
              <div className="ImageCropper__container-options">
                <button
                  type="button"
                  title="Rotate left"
                  className="ImageCropper__container-options-button"
                  onClick={() => this.rotate("left")}
                >
                  <RotateLeftIcon />
                </button>
                <button
                  type="button"
                  title="Rotate Right"
                  className="ImageCropper__container-options-button"
                  onClick={() => this.rotate("right")}
                >
                  <RotateRightIcon />
                </button>
                <button
                  type="button"
                  title="Zoom In"
                  className="ImageCropper__container-options-button"
                  onClick={this.setCrop}
                >
                  <ZoomInIcon />
                </button>
                <button
                  type="button"
                  title="Zoom Out"
                  className="ImageCropper__container-options-button"
                  onClick={this.setdCrop}
                >
                  <ZoomOutIcon />
                </button>
                <button
                  type="button"
                  title="Reset"
                  className="ImageCropper__container-options-button"
                  onClick={() => this.cropper.current.cropper.reset()}
                >
                  <ResetTvIcon />
                </button>
              </div>

              <Box sx={{ marginTop: { xs: "15px", sm: "30px" } }}>
                <Button
                  variant="contained"
                  type="button"
                  sx={{
                    backgroundColor: "#d22418 ",
                    color: "#fff",
                    position: "relative",
                    marginRight: "20px !important",
                    fontSize: { xs: "10px !important", sm: "16px !important" },
                    marginTop: { xs: "20px", sm: "0" },
                    padding: "7px 26px",
                    "&:hover": {
                      backgroundColor: "#fff",
                      color: "#000",
                    },
                  }}
                  onClick={this.saveImage}
                >
                  Update
                </Button>
              </Box>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ImageCropper;
