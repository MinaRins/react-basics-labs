import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';

const Task = (props) => {
  const priorityColors = {
    low: '#5bb4c4',
    medium: '#e0a458',
    high: '#d9534f'
  };

  const cardColor = props.done
    ? 'lightgrey'
    : priorityColors[props.priority];

  const priorityLabel = props.priority
    ? props.priority.charAt(0).toUpperCase() + props.priority.slice(1)
    : 'Low';

  return (
    <Grid
      key={props.id}
      size={{ xs: 12, sm: 6, md: 4 }}
    >
      <Card
        sx={{
          backgroundColor: cardColor,
          padding: '20px',
          borderRadius: 3,
          boxShadow: 4,
          transition: '0.2s',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: 8
          }
        }}
      >
        <CardHeader
          title={props.title}
          sx={{
            backgroundColor: 'white',
            borderRadius: 2,
            padding: '20px',
            textAlign: 'center',
            fontWeight: 'bold'
          }}
        />

        <CardContent>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 1,
              mb: 2,
              padding: '10px'
            }}
          >
            <Typography
              component="p"
              variant="subtitle2"
              color="text.primary"
            >
              Due: {props.deadline}
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mb: 2
            }}
          >
            <Chip
              label={`Priority: ${priorityLabel}`}
              color={
                props.priority === 'high'
                  ? 'error'
                  : props.priority === 'medium'
                  ? 'warning'
                  : 'info'
              }
              variant="filled"
            />
          </Box>

          <Typography
            component="p"
            variant="subtitle1"
            align="center"
            sx={{
              fontStyle: 'italic',
              minHeight: '48px'
            }}
          >
            {props.description}
          </Typography>
        </CardContent>

        <CardActions
          sx={{
            justifyContent: 'space-between',
            padding: '20px'
          }}
        >
          <Button
            variant="contained"
            size="small"
            color="success"
            startIcon={<CheckIcon />}
            onClick={props.markDone}
            sx={{
              borderRadius: 2
            }}
          >
            Done
          </Button>

          <Button
            variant="contained"
            size="small"
            color="error"
            startIcon={<DeleteIcon />}
            onClick={props.deleteTask}
            sx={{
              borderRadius: 2
            }}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Task;
