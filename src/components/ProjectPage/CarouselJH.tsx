import React from 'react';

import CarouselButton from '../../Media/CarouselButton.png'

interface CarouselProps{
    images: string[];
}

interface CarouselState{
    currentIndex: number;
}

export class CarouselJH extends React.Component<CarouselProps, CarouselState>{
    constructor(props: CarouselProps){
        super(props);

        this.state = {
            currentIndex: 0
        };

        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
    }

    next() {
        this.setState((prevState) => ({
            currentIndex: prevState.currentIndex + 1 < this.props.images.length ? prevState.currentIndex + 1 : 0,
        }));
    }

    prev() {
        this.setState((prevState) => ({
            currentIndex: prevState.currentIndex - 1 >= 0 ? prevState.currentIndex - 1 : this.props.images.length - 1,
        }));
    }

    generateDots() {
        const { images } = this.props;
        const { currentIndex } = this.state;

        return images.map((_,index) => (
            <button
                key={index} 
                onClick={() => this.setState({currentIndex:index})}
                className={`h-4 w-4 mx-1 bg-comments rounded-full ${currentIndex === index ? 'opacity-75' : 'opacity-25'}`}>
            </button>
        ));
    }

    render(): React.ReactNode {
        const { images } = this.props;
        const { currentIndex } = this.state;

        return (
            <div className = "relative bg-backgroundDimmed">
                <button onClick={this.prev} className = 'absolute h-8 w-8 bg-comments rounded-full opacity-75 hover:opacity-25 top-1/2 left-4 transform -translate-y-1/2'>
                    <img src = {CarouselButton} alt={'BTN'} className = 'w-full h-full'/>
                </button>
                <img src = {images[currentIndex]} alt = {'Oops'} className = 'py-2 px-2'/>
                <button onClick={this.next} className = 'absolute h-8 w-8 bg-comments rounded-full opacity-75 hover:opacity-25 top-1/2 right-4 transform -translate-y-1/2 rotate-180'>
                    <img src = {CarouselButton} alt={'BTN'} className = 'w-full h-full'/>
                </button>
                <div className='absolute bottom-2 left-1/2 transform -translate-x-1/2 grid grid-flow-col'>
                    {this.generateDots()}
                </div>
            </div>
        )
    }
}