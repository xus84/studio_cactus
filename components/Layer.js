const Layer = ({ material, index }) => {
        return (
          <img
            src={material.material.layer}
            alt='layer'
            style={{ zIndex: index }}
            className='absolute inset-0 object-contain layer'
          />
        );
      };
      
      export default Layer;
      