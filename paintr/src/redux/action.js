function search(searchText){
    return {type: "SEARCHING", payload: searchText}
}

export {search}

function updatePaintingDetails(info){
    return {type: 'UPDATE_PAINTING_INFO', payload: info}
}

export {updatePaintingDetails}

function voting(paintingId){
    return {type: 'VOTING', payload: paintingId}
}
export {voting}