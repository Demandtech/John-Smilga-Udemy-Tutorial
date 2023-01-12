export const reducer = (state, action) => {
  const newPeople = [...state.people, action.payload]
  if (action.type === 'ADD_ITEM') {
    console.log(newPeople)
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: 'Item added',
    }
  }
  if (action.type === 'NO_VALUE') {
    return { ...state, modalContent: 'Please enter value', isModalOpen: true }
  }

  if (action.type === 'CLOSE_MODAL') {
    return { ...state, isModalOpen: false }
  }

  if (action.type === 'REMOVE_ITEM') {
    const newPeople = state.people.filter((person) => {
      return person.id !== action.payload
    })
    return { ...state, people: newPeople }
  }
  throw new Error('no matching action type')
}
