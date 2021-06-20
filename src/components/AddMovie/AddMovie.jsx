import TextField from '@material-ui/core/TextField';

function addMovie(){


    return (
        <>
        <form onSubmit={handleSubmit}>
        <TextField id="standard-basic" label="Movie Title" placeholder="Movie Title"/>
        <TextField id="standard-basic" label="Movie Poster" placeholder="Movie Poster"/>
        <TextField id="standard-textarea" label="Movie Description" placeholder="Description" multiline />
        <InputLabel id="demo-simple-select-label">Genre</InputLabel>
        <Select
          labelId="genre selection"
          id="demo-simple-select"
          value={}
          onChange={}
        >
          <MenuItem value={}>Ten</MenuItem>
          <MenuItem value={}>Twenty</MenuItem>
          <MenuItem value={}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Select the movie's genre here.</FormHelperText>

        </form>
        </>
    )
}

export default addMovie