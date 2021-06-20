import TextField from '@material-ui/core/TextField';

function addMovie(){


    return (
        <>
        <form onSubmit={handleSubmit}>
        <TextField id="standard-basic" label="Movie Title" placeholder="Movie Title"/>
        <TextField id="standard-basic" label="Movie Poster" placeholder="Movie Poster"/>
        <TextField id="standard-textarea" label="Movie Description" placeholder="Description" multiline />


        </form>
        </>
    )
}

export default addMovie