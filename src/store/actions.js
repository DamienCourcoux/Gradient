/* eslint-disable import/prefer-default-export */

export const CHANGE_BOTH_COLORS = 'CHANGE_BOTH_COLORS';
export const CHANGE_COLOR = 'CHANGE_LAST_COLOR';
export const ROTATE_DIRECTION = 'ROTATE_DIRECTION';

export const createChangeDirectionAction = (angle) => ({
  type: ROTATE_DIRECTION,
  angle: `${angle}deg`,
});
