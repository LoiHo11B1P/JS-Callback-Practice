function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    function moveWithArrowKeys(left, bottom, handelImageAnimation) {

        let direction = null;
        let x = left;
        let y = bottom;

        character.style.left = x + 'px';
        character.style.bottom = y + 'px';

        function moveCharacter() {
            if(direction === 'west') {
                x--;
            } else if (direction === 'north') {
                y++;
            } else if (direction === 'east') {
                x++;
            } else if (direction === 'south') {
                y--;
            }

            character.style.left = x + 'px';
            character.style.bottom = y + 'px';
        }
        setInterval(moveCharacter, 1)

        document.addEventListener('keydown', function(e) {

            if(e.repeat) return;
        
            if(e.key === 'ArrowLeft') {
                direction = 'west';
            }
            if(e.key === 'ArrowRight') {
                direction = 'east';
            } 
            if(e.key === 'ArrowUp') {
                direction = 'north';
            }
            if(e.key === 'ArrowDown') {
                direction = 'south';
            }

            if(handelImageAnimation) {
                handelImageAnimation(direction);
            }
            
        })
        
        document.addEventListener('keyup', function(e) {
            direction = null;
            if(handelImageAnimation) {
                handelImageAnimation(direction);
            }
        })
    }
   

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}