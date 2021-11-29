const taskBoardSelector = {
    getUpdatedTaskLists : (taskLists, listsUpdated) => {
        listsUpdated.forEach((updatedList) => {
            const updatedListIndex = taskLists.findIndex((list) => list._id === updatedList._id);
            taskLists.splice(updatedListIndex, 1, updatedList);
        });
        return [
            ...taskLists
        ]
    },
    getUpdatedTaskListAfterUpdatingTask : (taskLists, updatedTask) => {
        const updatedTaskListId = updatedTask.listLocation;
        const affectedListIndex = taskLists.findIndex((list)=>list._id === updatedTaskListId);
        const affectedList = taskLists[affectedListIndex];
        const updatedTaskIndex = affectedList.tasks.findIndex((task)=>task._id === updatedTask._id);
        affectedList.tasks.splice(updatedTaskIndex, 1, updatedTask);
        taskLists.splice(affectedListIndex,1,affectedList)
        return [
            ...taskLists
        ]
    },
    getUpdatedTaskListAfterDeletingTask : (taskLists, deletedTask) => {
        const deletedTaskListId = deletedTask.listLocation;
        const affectedListIndex = taskLists.findIndex((list)=>list._id === deletedTaskListId);
        const updatedListTasks = taskLists[affectedListIndex].tasks.filter((task)=>task._id !== deletedTask._id);
        taskLists.splice(affectedListIndex, 1, {...taskLists[affectedListIndex], tasks: updatedListTasks})
        return [
            ...taskLists
        ]
    }
}

export default taskBoardSelector;