import React from 'react'
import { Input, Button} from 'semantic-ui-react'

const Search = ({searchField, searchChange, submitForm}) => {
  return (
    <div id="search_field">
      <form onSubmit={submitForm}>
        <Input label='Zip Code:' placeholder='07010' value={searchField}  onChange={searchChange}/>
      </form>
    </div>
  )
}
export default Search
