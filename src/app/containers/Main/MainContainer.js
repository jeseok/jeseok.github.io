import React, { PropTypes } from 'react'
import { Profile, LangButton, ListView, TimeLineListView, Contact} from 'components'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as langActionCreator from 'redux/modules/lang'
import styles from './styles.scss'

const MainContainer = React.createClass({

  propTypes: {
    changeLanguage: PropTypes.func.isRequired,
  },
  getInitialState(){
    return({

    })
  },
  handleLangButton(){
    const targetLang = this.props.currentLang == "kr" ? "en" : "kr"
    this.props.changeLanguage(targetLang)
  },
  componentWillMount(){

  },
  compoentWillUnmount(){

  },
  render () {
    const socialLinkObj = this.props.data.profile.socialLink
    const currentLang = this.props.currentLang
    const langToDisplay = currentLang == "en" ? "kr" : "en"
    const data = this.props.data
    const nameToDisplay = data.profile.name[currentLang]
    const descriptionToDisplay = data.profile.description[currentLang]
    const clientsTitleToDisplay = data.menus.clients[currentLang]
    const specialtiesTitlesToDisplay = data.menus.specialties[currentLang]
    const projectsTitleToDisplay = data.menus.project[currentLang]
    const workTitleToDisplay = data.menus.work[currentLang]
    const contactTitleToDisplay = data.menus.contact[currentLang]
    return (
      <div className={'outer-frame'}>

        <div className={styles.mainContainer}>
          <div className={styles.buttonContainer}>
            <LangButton
              currentLang={langToDisplay}
              handleLangButton={this.handleLangButton}
              style={styles.langBtn} />
          </div>

          <div className={styles.section}>
            <Profile
              name={"- " + nameToDisplay}
              socialLinkObj={socialLinkObj}
              description={descriptionToDisplay}
            />
          </div>
          <div className={styles.section} >
            <TimeLineListView
              title={"- " + workTitleToDisplay}
              items={data.experience}
            />
          </div>
          <div className={styles.section} >
            <TimeLineListView
              currentLang={currentLang}
              title={"- " + projectsTitleToDisplay}
              items={data.projects}
            />
          </div>

          <div className={styles.section}>
            <ListView
              sectionTitle={"- " + clientsTitleToDisplay}
              listItems={data.clients}
            />
          </div>
          <div className={styles.section}>
            <ListView
              sectionTitle={"- " + specialtiesTitlesToDisplay}
              listItems={data.specialties}
            />
          </div>

          <div className={styles.section} >
            <Contact
              title={"- " + contactTitleToDisplay}
              phone={data.profile.contact.phone}
              email={data.profile.contact.email}
            />
          </div>

        </div>
      </div>
    )
  },
})


function mapStateToProps(state){
  const currentLang = state.currentLang
  const data = state.data
  console.log(data);
  return {
    currentLang: currentLang,
    data : data
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(langActionCreator, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer)
