import React from "react";

interface Props {
    imageUrl?: string;
    top?: number;
    left?: number;
    className?: string;
  }
  
  class Phone extends React.Component<Props> {
    state = {
      isHovered: false,
      isVisible: false
    };
  
    handleMouseEnter = () => {
      this.setState({ isHovered: true });
    };
  
    handleMouseLeave = () => {
      this.setState({ isHovered: false });
    };
  
    render() {
      const { imageUrl, top, left, className } = this.props;
      const { isHovered } = this.state;
      const MoveY = isHovered? -50 : 0;
      
      return (
        <div
            className={className}
            style={{
            position: "absolute", 
            top:top,
            left:left,
            transform: `translateY(${MoveY}px)`,
            transition: "transform 0.3s ease-in-out",
            }}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
        >
          <img src={imageUrl}/>
        </div>
      );
    }
  }

export default Phone;
