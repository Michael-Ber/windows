const works = () => {
    const imgParent = document.querySelector('.works');
    const workSpace = document.createElement('div'),
            bigImg = document.createElement('img');
    let i = 1;
    
    imgParent.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.target;

        if(i < 2) {
            i++;
            workSpace.classList.add('popup');
            workSpace.style.cssText = `
                display: none;
                justify-content: center;
                align-items: center;
            `;

            bigImg.style.cssText = `
                margin-bottom: 0;
                object-fit: cover;
            `;
            const adaptationImg = (widthValue) => {
                if(window.matchMedia('(max-width: 991px)').matches) {
                    bigImg.style.maxWidth = 600 + 'px'; 
                }
                if(window.matchMedia('(max-width: 767px)').matches) {
                    bigImg.style.maxWidth = 420 + 'px';
                }
                if(window.matchMedia('(max-width: 530px)').matches) {
                    bigImg.style.maxWidth = 300 + 'px';
                }
                if(window.matchMedia('(min-width: 992px)').matches) {
                    bigImg.style.maxWidth = 'unset';
                }
            };
            adaptationImg();
            window.addEventListener('resize', () => {
                adaptationImg();
            });
            workSpace.append(bigImg);
            imgParent.append(workSpace);
            
            if(target && target.classList.contains('preview')) {
                
                let path = target.parentNode.getAttribute('href');
                bigImg.setAttribute('src', path);
                workSpace.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            }
        }else {
            if(target.classList.contains('popup')) {
                workSpace.remove();
                document.body.style.overflow = '';
                i = 1;
            }
        }
    });

};

export default works;