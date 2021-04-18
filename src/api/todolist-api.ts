import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': '2e7cae24-6e87-458f-8c5f-7361562c8207'
    }
})

export const todolistAPI = {
    getTodolist() {
        return  instance.get<Array<TodolistType>>(`todo-lists`)
    },
    createTodolist(title: string) {
        return  instance.post<ResponseType<{item: TodolistType}>>(`todo-lists`, {title})
    },
    deleteTodolist(todolistId: string, ) {
        return  instance.delete<ResponseType>(`todo-lists/${todolistId}`)
    },
    updateTodolist(todolistId: string, title: string) {
        return  instance.put<ResponseType>(`todo-lists/${todolistId}`, {title})
    }
}

export type TodolistType= {
    id: string
    addedDate: string
    order: number
    title: string
}

type ResponseType<T = {}> = {
    resultCode: number
    messages: Array<string>
    data: T
}





