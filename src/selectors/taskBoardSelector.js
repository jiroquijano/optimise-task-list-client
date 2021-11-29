const getUpdatedTaskLists = (taskLists, listsUpdated) => {
    const updatedListNames = listsUpdated.map((list)=>list.name);
    const unaffectedLists = taskLists.filter((list)=> !updatedListNames.includes(list.name));
    return [
        ...listsUpdated,
        ...unaffectedLists
    ]
}

const getUpdatedTaskListAfterAddingTask = (taskLists, updatedTask) => {
    const updatedTaskListId = updatedTask.listLocation;
    const unChangedLists = taskLists.filter((list)=>updatedTaskListId !== list._id);
    const affectedList = taskLists.find((list)=>updatedTaskListId === list._id);
    const updatedTaskIndex = affectedList.tasks.findIndex((task)=>task._id === updatedTask._id);
    affectedList.tasks.splice(updatedTaskIndex, 1, updatedTask);
    return [
        affectedList,
        ...unChangedLists
    ]
}

const getUpdatedTaskListAfterDeletingTask = (taskLists, deletedTask) => {
    const deletedTaskListId = deletedTask.listLocation;
    const unChangedLists = taskLists.filter((list)=>deletedTaskListId !== list._id);
    const affectedList = taskLists.find((list)=>deletedTaskListId === list._id);
    affectedList.tasks = affectedList.tasks.filter((task)=>task._id !== deletedTask._id);
    return [
        affectedList,
        ...unChangedLists
    ]
}


export {
    getUpdatedTaskLists,
    getUpdatedTaskListAfterAddingTask,
    getUpdatedTaskListAfterDeletingTask
}