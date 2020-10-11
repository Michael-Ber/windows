const works = () => {
    const workSpace = document.createElement('div'),
          imgWrapper = document.createElement('div'),
          bigImg = document.createElement('img'),
          imgParent = document.querySelector('.works');
    let imgWidth, imgHeight;
    
    workSpace.classList.add('popup');
    workSpace.style.cssText = `
        display: none;
        justify-content: center;
        align-items: center;
    `;

    bigImg.style.cssText = `
        margin-bottom: 0;
        width: 100%;
    `;
    imgWrapper.append(bigImg);
    workSpace.append(imgWrapper);
    imgParent.append(workSpace);
    imgParent.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.target;
        if(target && target.classList.contains('preview')) {
            
            let path = target.parentNode.getAttribute('href');
            bigImg.setAttribute('src', path);
            // imgWidth = window.getComputedStyle(bigImg).width;
            // imgHeight = window.getComputedStyle(bigImg).height;
            console.log(imgWidth, imgHeight);
            // imgWrapper.style.width = imgWidth + 'px';
            // imgWrapper.style.height = imgHeight + 'px';
            workSpace.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
        if(target && target.classList.contains('popup')) {
            workSpace.style.display = 'none';
            document.body.style.overflow = '';
        }
    });

    // if(window.matchMedia('(max-width: 767px)').matches) {
    // let bigImgWrapper, bigImg, i=1;
    // images.forEach(item => {
    //     item.addEventListener('click', (e) => {
    //         e.preventDefault();
    //         if(i < 2) {
    //             i++;
    //             bigImgWrapper = document.createElement('div');
    //             bigImgWrapper.classList.add('overlay');
    //             bigImgWrapper.style.display = 'block';
    //             bigImg = document.createElement('img');
    //             bigImg.style.cssText = `
    //                 position: fixed;
    //                 top: 50%;
    //                 left: 50%;
    //                 transform: translate(-50%, -50%);
    //                 width: 100%;
    //             `;
    //             bigImg.src = e.target.parentNode.getAttribute('href');
    //             bigImgWrapper.append(bigImg);
    //             item.append(bigImgWrapper);
    //         }else {
    //             if(e.target.classList.contains('overlay')) {
    //                 bigImgWrapper.remove();
    //                 i=1;
    //                 console.log('here');
    //             } 
    //         }
            
    //     });
        
    // });
};

export default works;