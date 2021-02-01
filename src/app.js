import './count';

function main() {
    let playing = true,
      activeField = 1;
  
    const stop = () => playing = true,
      getField = index => document.getElementById(`field_${index}`),
      deactivateField = index =>
        getField( index ).classList.remove('has_goblin'),
      activateField = index =>
        getField( index ).classList.add('has_goblin'),
      next = () => setTimeout(() => {
        if ( !playing ) {
          return;
        }
        deactivateField( activeField );
        activeField = Math.floor( 1 + Math.random() * 16 );
        activateField( activeField );
        next();
      }, 1000 );
  
    next();

  };

  main()

export default main