const slider = (slider, sliderItem, slidetoShow, delay, dir = 1) => {
    let position = 1;
    let interval;
    
    const container = document.querySelector(slider),
            slides = document.querySelectorAll(sliderItem),
            elements = slides.length -1,
            slideheight = dir == 1? container.clientHeight / slidetoShow: container.clientWidth / slidetoShow 
            console.log(slideheight);
            console.log(slides);
            
            
            slides.forEach((item) => {
                if(dir == 1) {
                    item.style.height = slideheight + 'px';
                }else {
                    item.style.width = slideheight + 'px';
                }
            })
        const startSlideShow = () => {
                interval = setInterval(() => {
                let slideScroll = (slideheight) * position;
                console.log(slideScroll);
                if(position >= elements) position = -1 ;

                container.style.transform = dir == 1?`translateY(-${slideScroll}px)`: `translateX(-${slideScroll}px)`
                position++;
            }, delay)
            
        }
        startSlideShow();

            container.addEventListener('mouseover', (e) => {
                clearInterval(interval);
            })
            container.addEventListener('mouseout', startSlideShow)
}

export default slider