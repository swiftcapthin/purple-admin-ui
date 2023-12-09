import React, { useEffect, useState } from "react";

interface IGradientBgProps {
  className?: string;
}

const GradientBg = ({ className }: IGradientBgProps) => {
  const images = ["/logo1.png", "/logo2.png", "/logo3.png"]; // 이미지 경로 배열
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // 현재 이미지 인덱스

  // 이미지 컨테이너 스타일
  const containerStyle: React.CSSProperties = {
    width: '100%', 
    height: '100vh', 
    overflow: 'hidden',
    position: 'relative' // 상대적 위치 지정
  };

  // 이미지 스타일
  const imageStyle: React.CSSProperties = {
    height: '100%', 
    width: 'auto', 
    minWidth: '100%', 
    objectFit: 'cover',
    objectPosition: 'center',
    position: 'absolute', // 절대적 위치 지정
    left: 0,
    top: 0,
    transition: 'opacity 1s ease-in-out', // 1초 동안 부드러운 투명도 변경
    opacity: 0 // 기본적으로 투명하게 설정
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3초마다 이미지 변경

    return () => clearInterval(timer); // 컴포넌트 unmount 시 타이머 정리
  }, [images.length]);

  return (
    <div className={`image-container ${className}`} style={containerStyle}>
      {images.map((image, index) => (
        <img
          key={image}
          src={image}
          style={{
            ...imageStyle,
            opacity: index === currentImageIndex ? 1 : 0 // 현재 인덱스의 이미지만 보이게 설정
          }}
          alt={`Logo ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default React.memo(GradientBg);
