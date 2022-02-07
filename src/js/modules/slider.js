const slider = (wrapper, slider, sliderItem, slidetoShow, delay, dir = 1, btnPrev = '' , btnNext) => {
    let position = 1;
    let interval;
    
    const container = document.querySelector(slider),
            slideWrapper = document.querySelector(wrapper),
            slides = document.querySelectorAll(sliderItem),
            elements = slides.length -1,
            slideheight = dir == 1? container.clientHeight / slidetoShow: container.clientWidth / slidetoShow;
           
            if(btnPrev) {
                
                const prevBtn = slideWrapper.querySelector(btnPrev)
                prevBtn.addEventListener('click', () => {
                    let slideScroll = (slideheight) * position;
                    container.style.transform = dir == 1?`translateY(-${slideScroll}px)`: `translateX(-${slideScroll}px)`
                    position++;
                })
            }else {
                
            }
            
            
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
                
                if(position >= elements) position = -1 ;

                container.style.transform = dir == 1?`translateY(-${slideScroll}px)`: `translateX(-${slideScroll}px)`
                position++;
            }, delay)
            
        }

        startSlideShow();

            slideWrapper.addEventListener('mouseover', (e) => {
                clearInterval(interval);
            })
            slideWrapper.addEventListener('mouseout', startSlideShow)
}

export default slider