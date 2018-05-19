import ParagraphElement from './paragraph-element'

class Acknowledgement extends ParagraphElement
{
  constructor() {
    super()
    this.rawProperties = null
    this.text = ''
    this.hasId = ''
    this.idName = ''
  }

  getType() {
    return 'Acknowledgement'
  }

  setRawProperties(rawProperties) {
    this.rawProperties = rawProperties
  }

  initialize() {
    this.text = this.rawProperties.text
    this.hasId = this.rawProperties.id
    this.idName = this.rawProperties.idName

    if(this.text === '') {
      console.log('ERROR:  It looks like you didn\'t set any text.  Skipping this acknowledgement')
    }
  }
}

export default Acknowledgement