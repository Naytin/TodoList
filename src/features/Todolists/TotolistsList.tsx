import React, {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";
import {addTodolistsTC, fetchTodolistsTC, TodolistDomainType} from "./todolistReducer";
import {TaskStateType} from "./tasksReducer";
import {Grid, Paper} from "@material-ui/core";
import {AddItemForm} from "../../Components/AddItemForm/AddItemForm";
import {Todolist} from "./Todolist/TodoList";

export const TodolistsList: React.FC = () => {
    const todolists = useSelector<AppRootStateType, Array<TodolistDomainType>>(state => state.todolists)
    const tasks = useSelector<AppRootStateType, TaskStateType>(state => state.tasks);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTodolistsTC())
    }, [])

    const addTodoList = useCallback((title: string) => {
        dispatch(addTodolistsTC(title))
    }, [])
    return <>
        <Grid container style={{padding: '20px'}} justify="center" alignItems="center"
              direction="column">
            <div style={{marginRight: '20px'}}>Add new task</div>
            <AddItemForm addItem={addTodoList}/>
        </Grid>
        <Grid container spacing={3}>
            {todolists.map(t => {
                let allTodoLists = tasks[t.id];
                return (
                    <Grid key={t.id} item style={{padding: '20px'}}>
                        <Paper style={{padding: '10px'}}>
                            <Todolist key={t.id}
                                      title={t.title}
                                      tasks={allTodoLists}
                                      filter={t.filter}
                                      todolistId={t.id}
                            />
                        </Paper>
                    </Grid>
                )
            })}
        </Grid>
    </>
}