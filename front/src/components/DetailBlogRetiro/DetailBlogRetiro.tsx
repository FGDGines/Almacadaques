import React, { useState, useRef } from 'react';
import './DetailBlogRetiro.css';

interface Retiro {
    index: number;
    day: number;
    month: number;
    year: number;
    image: string[] | string;
    title: string;
    author: string;
    description?: string;
}

interface DetailBlogRetiroProps {
    retiro: Retiro | null;
    onClose: () => void;
}

const monthNames = [
    
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
];

function DetailBlogRetiro({ retiro, onClose }: DetailBlogRetiroProps) {
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const carouselRef = useRef<HTMLDivElement | null>(null);

    if (!retiro) {
        return null;
    }

    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsDragging(true);
        setStartX(e.nativeEvent.pageX);
        setScrollLeft(carouselRef.current!.scrollLeft);
    };
    
    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.nativeEvent.pageX;
        const walk = (x - startX) * 1.5;
        carouselRef.current!.scrollLeft = scrollLeft - walk;
    };
    
    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const prevSet = () => {
        carouselRef.current!.scrollLeft -= 1.5 * (carouselRef.current!.offsetWidth / 3);
    };

    const nextSet = () => {
        carouselRef.current!.scrollLeft += 1.5 * (carouselRef.current!.offsetWidth / 3);
    };

    return (
        <div className="previRetiro">
            <div className="ctPreviRetiro">
                <div className="closePreviRetiro" onClick={onClose}>
                    <img src="../../../src/assets/images/cerrar.png" alt="Cerrar" />
                </div>

                <div className="wrapperRetiro">
                    <img
                        id='left'
                        src="../../../src/assets/images/Arrowleft.png"
                        alt="Flecha a la izquierda"
                        className='FlechaIMG'
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onClick={prevSet}
                    />
                    <div className="carouselRetiro" ref={carouselRef} onMouseMove={handleMouseMove}>
                        {Array.isArray(retiro.image) ? (
                            retiro.image.map((image, index) => (
                                <img key={index} src={image} alt={`Retiro ${index + 1}`} draggable={false} />
                            ))
                        ) : (
                            <img src={retiro.image} alt="Retiro" />
                        )}
                    </div>
                    <img
                        id="right"
                        src="../../../src/assets/images/ArrowRight.png"
                        alt="Flecha a la derecha"
                        className='FlechaIMG'
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onClick={nextSet}
                    />
                </div>
                <div className="titlePreviRetiro">
                    <h4>{retiro.title}</h4>
                </div>
                <div className="dataPreviRetiro">
                    <h4>{`Dato: ${monthNames[retiro.month]} ${retiro.day}, ${retiro.year}`}</h4>
                    <h4 className='firma'>{retiro.author}</h4>
                </div>
                <div className="descripPreviRetiro">
                    <p>{retiro.description}</p>
                </div>
            </div>
        </div>
    );
}

export { DetailBlogRetiro };
