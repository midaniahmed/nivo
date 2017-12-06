/*
 * This file is part of the nivo project.
 *
 * Copyright 2016-present, Raphaël Benitte.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React from 'react'
import PropTypes from 'prop-types'
import LegendSvg from './LegendSvg'
import {
    DIRECTION_ROW,
    DIRECTION_COLUMN,
    DIRECTION_BOTTOM_TO_TOP,
    DIRECTION_LEFT_TO_RIGHT,
    DIRECTION_RIGHT_TO_LEFT,
    DIRECTION_TOP_TO_BOTTOM,
    ANCHOR_TOP,
    ANCHOR_TOP_RIGHT,
    ANCHOR_RIGHT,
    ANCHOR_BOTTOM_RIGHT,
    ANCHOR_BOTTOM,
    ANCHOR_BOTTOM_LEFT,
    ANCHOR_LEFT,
    ANCHOR_TOP_LEFT,
} from '../constants'

const BoxLegendSvg = ({
    data,

    containerWidth,
    containerHeight,
    anchor,
    direction,
    justify,

    itemWidth,
    itemHeight,
    itemDirection,
    itemsSpacing,
    symbolSize,
    symbolSpacing,
}) => {
    let x = 0
    let y = 0

    let width = itemWidth
    let height = itemHeight
    if (direction === DIRECTION_ROW) {
        width = itemWidth * data.length
    } else if (direction === DIRECTION_COLUMN) {
        height = itemHeight * data.length
    }

    switch (anchor) {
        case ANCHOR_TOP:
            x = (containerWidth - width) / 2
            break

        case ANCHOR_TOP_RIGHT:
            x = containerWidth - width
            break

        case ANCHOR_RIGHT:
            x = containerWidth - width
            y = (containerHeight - height) / 2
            break

        case ANCHOR_BOTTOM_RIGHT:
            x = containerWidth - width
            y = containerHeight - height
            break

        case ANCHOR_BOTTOM:
            x = (containerWidth - width) / 2
            y = containerHeight - height
            break

        case ANCHOR_BOTTOM_LEFT:
            y = containerHeight - height
            break

        case ANCHOR_LEFT:
            y = (containerHeight - height) / 2
            break
    }

    return (
        <LegendSvg
            data={data}
            x={x}
            y={y}
            width={width}
            height={height}
            direction={direction}
            justify={justify}
            itemWidth={itemWidth}
            itemHeight={itemHeight}
            itemDirection={itemDirection}
            itemsSpacing={itemsSpacing}
            symbolSize={symbolSize}
            symbolSpacing={symbolSpacing}
        />
    )
}

BoxLegendSvg.propTypes = {
    containerWidth: PropTypes.number.isRequired,
    containerHeight: PropTypes.number.isRequired,
    anchor: PropTypes.oneOf([
        ANCHOR_TOP,
        ANCHOR_TOP_RIGHT,
        ANCHOR_RIGHT,
        ANCHOR_BOTTOM_RIGHT,
        ANCHOR_BOTTOM,
        ANCHOR_BOTTOM_LEFT,
        ANCHOR_LEFT,
        ANCHOR_TOP_LEFT,
    ]).isRequired,
    direction: PropTypes.oneOf([DIRECTION_ROW, DIRECTION_COLUMN]).isRequired,
    justify: PropTypes.bool,

    itemWidth: PropTypes.number.isRequired,
    itemHeight: PropTypes.number.isRequired,
    itemDirection: PropTypes.oneOf([
        DIRECTION_LEFT_TO_RIGHT,
        DIRECTION_RIGHT_TO_LEFT,
        DIRECTION_TOP_TO_BOTTOM,
        DIRECTION_BOTTOM_TO_TOP,
    ]),
    itemsSpacing: PropTypes.number.isRequired,
    symbolSize: PropTypes.number,
    symbolSpacing: PropTypes.number,
}

BoxLegendSvg.defaultProps = {
    itemsSpacing: 0,
}

export default BoxLegendSvg
