const APIURL = '/api/tasks';

export async function getTasks() {
    return fetch(APIURL)
        .then(response => {
            if(!response.ok) {
                if(response.status >= 400 && response.status < 500){
                    return response.json().then(data => {
                        let err = {errorMessage: data.message};
                        throw err;
                    })
                } else {
                    let err = {errorMessage: "Please try again later. Server is not responding..."};
                    throw err;
                }
            }
            return response.json();
    
      })
}

export async function createTask(val){
    return fetch(APIURL, {
        method: 'post',
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
        body: JSON.stringify({name: val})
    })
    .then(response => {
        if(!response.ok) {
            if(response.status >= 400 && response.status < 500){
                return response.json().then(data => {
                    let err = {errorMessage: data.message};
                    throw err;
                })
            } else {
                let err = {errorMessage: "Please try again later. Server is not responding..."};
                throw err;
            }
        }
        return response.json();
  })
}

export async function removeTask(id) {
    const DELETEURL = APIURL + '/' + id;
        return fetch(DELETEURL, {
            method: 'delete',
        })
        .then(response => {
            if(!response.ok) {
                if(response.status >= 400 && response.status < 500){
                    return response.json().then(data => {
                        let err = {errorMessage: data.message};
                        throw err;
                    })
                } else {
                    let err = {errorMessage: "Please try again later. Server is not responding..."};
                    throw err;
                }
            }
            return response.json();
      })
}

export async function updateTask(task) {
    const UPDATEURL = APIURL + '/' + task._id;
        return fetch(UPDATEURL, {
            method: 'put',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify({completed: !task.completed})
        })
        .then(response => {
            if(!response.ok) {
                if(response.status >= 400 && response.status < 500){
                    return response.json().then(data => {
                        let err = {errorMessage: data.message};
                        throw err;
                    })
                } else {
                    let err = {errorMessage: "Please try again later. Server is not responding..."};
                    throw err;
                }
            }
            return response.json();
      })
}