let sBox = document.querySelector('div.sbox');

let currentElement = null; 

sBox.onmousedown = function (event) {
    // (1) prepare to move
        // make absolute and on top
          sBox.style.position = 'absolute';
          sBox.style.zIndex = 1000;
        //take it out of any current parents, into body
            document.body.append(sBox);
        // centers the box at (pageX, PageY) coordinates
        function moveAt(x, y) {
        sBox.style.left = x - sBox.offsetWidth / 2 + 'px';
        sBox.style.top = y - sBox.offsetHeight / 2 + 'px';
        }
    
        //move the absolutely positioned box under the pointer
         moveAt(event.pageX, event.pageY);
    
    
    //(2) move the box with on mousemove
    document.addEventListener('mousemove', onMouseMove);
    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
        sBox.hidden = true;
        let elem = document.elementFromPoint(event.clientX, event.clientY);
        sBox.hidden = false;
      
        if (!elem) return;
        let target = elem.closest('.lbox');
       
        if (currentElement != target) {
            if (currentElement) {
                exitMyTraget(currentElement);
            }
            currentElement = target;
            if (currentElement) {
                enterMyTraget(currentElement);
            }
        }
        
        
    }

    //

  

    //(3) drop the box with mouseup, remove unneeded handlers
    sBox.addEventListener('mouseup', function () {
        document.removeEventListener('mousemove', onMouseMove);
        
    });
}

function enterMyTraget(node) {
    node.style.backgroundColor = 'yellow';
    node.style.color = 'red';
    sBox.innerHTML = node.innerHTML;
    sBox.style.backgroundColor = 'pink';
    setTimeout(() => {
        sBox.innerHTML = '';
        sBox.style.backgroundColor = '';
    }, 5000);
}


function exitMyTraget(node) {
    node.style.backgroundColor = '';
    node.style.color = 'white';
}