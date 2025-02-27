// Disabled the rule since `fill` is safe here
// but `Array.from` will increase bundle size.
/* eslint-disable unicorn/no-new-array */

import * as React from 'react';
import type { Key } from 'react';

export type ItemHeightData = [key: Key, height: number, column?: number];

export type ItemPositions = Map<
  Key,
  {
    column: number;
    top: number;
  }
>;

/**
 * Auto arrange the items in the masonry layout.
 * Always get stable positions by order
 * instead of dynamic adjust for next item height.
 */
export default function usePositions(
  itemHeights: ItemHeightData[],
  columnCount: number,
  verticalGutter: number,
): [itemPositions: ItemPositions, totalHeight: number] {
  // ==================== Auto Order ====================
  const [orderItemPositions, orderTotalHeight] = React.useMemo(() => {
    const columnHeights = new Array(columnCount).fill(0) as number[];
    const itemPositions: ItemPositions = new Map();

    for (let i = 0; i < itemHeights.length; i += 1) {
      const [itemKey, itemHeight, itemColumn] = itemHeights[i];

      let targetColumnIndex = itemColumn ?? columnHeights.indexOf(Math.min(...columnHeights));
      targetColumnIndex = Math.min(targetColumnIndex, columnCount - 1);

      const top = columnHeights[targetColumnIndex];
      itemPositions.set(itemKey, {
        column: targetColumnIndex,
        top,
      });

      columnHeights[targetColumnIndex] += itemHeight + verticalGutter;
    }

    return [itemPositions, Math.max(0, Math.max(...columnHeights) - verticalGutter)];
  }, [columnCount, itemHeights, verticalGutter]);

  // ====================== Return ======================
  return [orderItemPositions, orderTotalHeight];
}
