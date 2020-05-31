import paintingsData from '../paintings.json'
import {combineReducers} from 'redux'


function searchTextReducer(previousState ='', action){
    switch(action.type){
        case "SEARCHING":
            return action.payload
        default: 
            return previousState
    }
} 

function paintingsReducer(previousState = paintingsData.paintings, action){
    switch(action.type){
        case "VOTING":
            let newPaitings = previousState.map(p =>{
                if(p.id === action.payload){
                    return {
                        ...p, 
                        votes: p.votes + 1 
                    }
                }
                return p 
            } )   
            return newPaitings
        case "UPDATE_PAINTING_INFO":
            let updatedPaitingsArray = previousState.map(p => {
                if(p.id === action.payload.paintingId){
                    return {...p,
                        title: action.payload.title, 
                        artist: {
                            ...p.artist,
                            name: action.payload.name,
                            birthday: action.payload.birthday,
                            deathday: action.payload.deathday
                        }
                    }

                }
                return p
            })
            return updatedPaitingsArray
        default: 
            return previousState
    }
}

const rootReducer = combineReducers({
    searchText: searchTextReducer,
    paintings: paintingsReducer
})


export default rootReducer