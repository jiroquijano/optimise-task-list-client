import React from 'react';
import SelectionOption from './SelectionOption';
import AddListTemplate from './AddListTemplate';
import _ from 'lodash';

const DockedContainerOptions = ({tasksSelected}) => {
    return !_.isEmpty(tasksSelected) ? (
                <SelectionOption/>
            ) : (
                <AddListTemplate/>
            )
}

export default DockedContainerOptions;