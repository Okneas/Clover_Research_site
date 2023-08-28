import React from "react";
import "./frame2.css"

interface Props {
    imageUrl: string;
    top: number;
    left: number;
    MoveY: number;
}

class Prototype extends React.Component<Props> {
    state = {
      isHovered: false,
    };
  
    handleMouseEnter = () => {
      this.setState({ isHovered: true });
    };
  
    handleMouseLeave = () => {
      this.setState({ isHovered: false });
    };
  
    render() {
      const { imageUrl, top, left, MoveY } = this.props;
      const { isHovered } = this.state;
      const moveY = isHovered? MoveY : 0;
      const rotate = isHovered? 25 : 25;
  
      return (
        <div
            className="groupPhones1"
            style={{
            top:top,
            left:left,
            transform: `rotate(${rotate}deg) translateY(${moveY}px)`,
            transition: "all 1s ease-in-out",
            }}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
        >
          <img src={imageUrl}/>
        </div>
      );
    }
  }

  export default Prototype;