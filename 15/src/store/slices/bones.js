import { createSlice, createSelector } from '@reduxjs/toolkit'

const swap = (array, pos, diff) => {
  const tmp = array[pos];
  array[pos] = array[pos + diff];
  array[pos + diff] = tmp;

  return array;
}

const shuffleBones = () => {
  const bones = Array(15).fill(0).map((_, i) => i + 1);
  const result = [];
  
  // Fisher-Yates shuffle algorithm
  while (bones.length > 0) {
    const randomIndex = Math.floor(Math.random() * bones.length);
    result.push(bones.splice(randomIndex, 1)[0]);
  }

  result.push(0);

  return result;
}

const initialState = () => {
  return {
    bones: shuffleBones(),
  }
}

const getBones = (state) => state.bones;

const getMoves = createSelector(
  getBones,
  (bones) => {
    const moves = {};
    const emptyIndex = bones.indexOf(0);
    
    bones.forEach((bone, index) => {
      if (bone === 0) return;
      
      // Check if bone can move left
      if (index % 4 !== 0 && bones[index - 1] === 0) {
        moves[bone] = 'left';
      } 
      // Check if bone can move right
      else if (index % 4 !== 3 && bones[index + 1] === 0) {
        moves[bone] = 'right';
      } 
      // Check if bone can move up
      else if (index > 3 && bones[index - 4] === 0) {
        moves[bone] = 'up';
      } 
      // Check if bone can move down
      else if (index < 12 && bones[index + 4] === 0) {
        moves[bone] = 'down';
      }
    });

    return moves;
  }
);

const getSolved = createSelector(
  getBones,
  (bones) => {
    for (let i = 0; i < 15; i++) {
      if (bones[i] !== i + 1) return false;
    }
    return bones[15] === 0;
  }
);

export const bonesSlice = createSlice({
  name: 'bones',
  initialState,
  reducers: {
    moveBone: (state, action) => {
      const { bone, direction } = action.payload;
      const bones = [...state.bones];
      const boneIndex = bones.indexOf(bone);
      const emptyIndex = bones.indexOf(0);
      
      if (direction === 'left' && boneIndex % 4 !== 0 && bones[boneIndex - 1] === 0) {
        swap(bones, boneIndex, -1);
      } else if (direction === 'right' && boneIndex % 4 !== 3 && bones[boneIndex + 1] === 0) {
        swap(bones, boneIndex, 1);
      } else if (direction === 'up' && boneIndex > 3 && bones[boneIndex - 4] === 0) {
        swap(bones, boneIndex, -4);
      } else if (direction === 'down' && boneIndex < 12 && bones[boneIndex + 4] === 0) {
        swap(bones, boneIndex, 4);
      }
      
      state.bones = bones;
    },
    shuffleBones: (state) => {
      state.bones = shuffleBones();
    },
  },
  selectors: {
    getBones,
    getMoves,
    getSolved,
  }
});