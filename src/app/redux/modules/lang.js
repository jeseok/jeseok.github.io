import data from 'data/data'
const CHANGE_LANG = 'CHANGE_LANG'

export function changeLanguage(targetLang){
  return {
    type: CHANGE_LANG,
    targetLang
  }
}

const initialLevelState = {
  currentLang : "en",
  data: data.data
}

export default function lang (state = initialLevelState, action, test) {
  switch (action.type) {
    case CHANGE_LANG :
      return {
        ...state,
        currentLang : action.targetLang
      }
    default :
      return state
  }
}
