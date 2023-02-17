/* import React from 'react';
import Layer from './Layer';

function LayersContainer({ materials }) {
  return (
    <>
      {materials.map((material, index) => (
        <Layer key={material.pointId} index={index - 3} material={material} />
      ))}
    </>
  );
}

export default LayersContainer; */

/* import React, { useContext } from 'react';
import Layer from '../common/Layer.component';
import { MaterialContext } from '../common/MaterialContext';

function LayersContainer() {
  const { materials, points, setMaterials, setPoints } = useContext(MaterialContext);

  return (
    <>
      {materials.map((material, index) => (
        <Layer key={material.pointId} index={index - 3} material={material} />
      ))}
    </>
  );
}

export default LayersContainer; */

//The MaterialContext here is a context object that provides the materials, points, setMaterials, and setPoints properties to the component.
//To use this context, you will first need to create the context object in a separate file:


/* import React from 'react';

export const MaterialContext = React.createContext({
  materials: [],
  points: [],
  setMaterials: () => {},
  setPoints: () => {},
});
 */

//Then you need to wrap your component tree with the MaterialContext.Provider, providing the materials, points, setMaterials, and setPoints values:
/* import React, { useState } from 'react';
import LayersContainer from './components/LayersContainer';
import { MaterialContext } from './components/common/MaterialContext';

function App() {
  const [materials, setMaterials] = useState([]);
  const [points, setPoints] = useState([]);

  return (
    <MaterialContext.Provider value={{ materials, points, setMaterials, setPoints }}>
      <LayersContainer />
    </MaterialContext.Provider>
  );
} */

//export default App;


/* import React, { useState, useEffect } from 'react';
import LoadingScreen from '../common/LoadingScreen.component';
import Points from '../common/Points.component';

function PointsContainer() {
  const [loadingPoints, setLoadingPoints] = useState(true);
  const [points, setPoints] = useState([]);

  useEffect(() => {
    // Simulate loading points data
    setTimeout(() => {
      setPoints([1, 2, 3, 4, 5]);
      setLoadingPoints(false);
    }, 2000);
  }, []);

  return (
    <>
      {loadingPoints ? <LoadingScreen /> : <Points points={points} />}
    </>
  );
}

export default PointsContainer; */



//Point

/* import React, { useState, useCallback } from 'react';
import Button from '@material-ui/core/Button';
import Camera from '@material-ui/icons/Camera';

function Point({ point, handleClick }) {
  const [coordX, setCoordX] = useState(point.coordX);
  const [coordY, setCoordY] = useState(point.coordY);

  const handler = useCallback(() => handleClick(point.id), [point.id, handleClick]);

  return (
    <div className='fixed' style={{ top: `${coordY}%`, left: `${coordX}%` }}>
      <Button
        variant='outlined'
        style={{ borderRadius: '50%', padding: '20px', height: '80px', width: '80px' }}
        onClick={handler}
      >
        <Camera />
      </Button>
    </div>
  );
}

export default Point;
 */

/* import React, { useState } from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Point from './Point.component';
import MaterialsMenu from '../common/MaterialsMenu.component';

function Points({ points }) {
  const [showingMenu, setShowingMenu] = useState(false);
  const [materials, setMaterials] = useState([]);
  const [pointId, setPointId] = useState('');

  const loadMaterials = (id) => {
    // Implement your loadMaterials logic here
    setPointId(id);
    setMaterials(/* materials for the given point id */;
 /*    setShowingMenu(true);
  };

  const closeMaterialsMenu = () => {
    setShowingMenu(false);
    setMaterials([]);
    setPointId('');
  };

  return (
    <>
      {points.map((point) => (
        <Point key={point.id} point={point} handleClick={loadMaterials} />
      ))}
      {showingMenu && (
        <ClickAwayListener onClickAway={closeMaterialsMenu}>
          <MaterialsMenu materials={materials} pointId={pointId} />
        </ClickAwayListener>
      )}
    </>
  );
}

export default Points;
 */ 

//Points
// React
//import React, { useState } from 'react'
// Material UI
//import ClickAwayListener from '@material-ui/core/ClickAwayListener'
// Components
/* import Point from './Point.component'
import MaterialsMenu from '../common/MaterialsMenu.component'

export const Points = ({ points }) => {
const [showingMenu, setShowingMenu] = useState(false)
const [materials, setMaterials] = useState([])
const [pointId, setPointId] = useState(null)

const loadMaterials = (id) => {
setMaterials([])
setPointId(id)
setShowingMenu(true)
}

const closeMaterialsMenu = () => {
setShowingMenu(false)
setMaterials([])
setPointId(null)
}

return (
<>
{points.map(point =>
<Point key={point.id} point={point} handleClick={() => loadMaterials(point.id)} />
)}
  {showingMenu && (
    <ClickAwayListener onClickAway={closeMaterialsMenu}>
      <MaterialsMenu materials={materials} pointId={pointId} />
    </ClickAwayListener>
  )}
</>
)
} */