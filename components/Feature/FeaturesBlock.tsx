import { Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CheckIcon from '@mui/icons-material/Check';

type Props = {
  features: string[];
};

const FeaturesBlock = (props: Props) => {
  return (
    <section className="pristine-dark-gradient grid grid-flow-row gap-4 justify-center items-center bg-secondary text-white py-8 px-4">
      <Typography
        component="h3"
        className="text-3xl lg:text-5xl text-gold text-center lg:text-start font-extrabold"
      >
        Features
      </Typography>
      <List dense={true}>
        {props.features.map((feature) => (
          <ListItem key={feature}>
            <ListItemIcon>
              <CheckIcon className="text-info" />
            </ListItemIcon>
            <ListItemText primary={feature} />
          </ListItem>
        ))}
      </List>
    </section>
  );
};

export default FeaturesBlock;
