import { SetStateAction, useEffect, useState } from 'react';

const ImageComponent = () => {
  const images = ['/logo1.png', '/logo2.png', '/logo3.png'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [containerHeight, setContainerHeight] = useState('250px'); // 초기 높이 설정

  // 창 크기가 변경될 때마다 컨테이너 높이를 조정하는 로직
  useEffect(() => {
    const updateHeight = () => {
      const width = window.innerWidth;
      const height = width / 4; // 4:1 비율로 높이 계산
      setContainerHeight(`${height}px`);
    };

    window.addEventListener('resize', updateHeight);
    updateHeight();

    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  // 3초마다 다음 이미지로 자동으로 넘어가는 로직
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3초마다 이미지 변경

    // 컴포넌트가 언마운트될 때 인터벌을 정리합니다.
    return () => clearInterval(timer);
  }, [images.length]);

  // 이미지 인덱스를 설정하는 함수
  const setImageIndex = (index: SetStateAction<number>) => {
    setCurrentImageIndex(index);
  };

  return (
    <div style={{ width: '100%', overflow: 'hidden', position: 'relative', height: containerHeight }}>
      {images.map((image, index) => (
        <img
          key={image}
          src={image}
          alt={`Logo ${index + 1}`}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover', // 이미지가 화면을 꽉 채우도록 설정
            objectPosition: 'center', // 이미지의 중심을 컨테이너의 중심으로 설정
            transition: 'opacity 0.5s ease-in-out',
            opacity: index === currentImageIndex ? 1 : 0,
          }}
        />
      ))}
      <div style={{ position: 'absolute', bottom: '10px', width: '100%', textAlign: 'center' }}>
        {images.map((_, index) => (
          <button
            key={index}
            style={{
              margin: '0 5px',
              cursor: 'pointer',
              borderRadius: '50%',
              width: '15px',
              height: '15px',
              padding: '0',
              lineHeight: '15px',
              border: 'none',
              background: currentImageIndex === index ? 'grey' : 'white',
              transition: 'background-color 0.3s',
            }}
            onClick={() => setImageIndex(index)}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageComponent;
