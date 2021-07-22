import {
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia
} from "@material-ui/core";
import { mainstyle } from "../mainstyle";

export default function Home() {
  const style = mainstyle();
  return (
    <div>
      <Card className={style.card}>
      <CardMedia image="https://picsum.photos/800" className={style.cardMedia}/>
      <CardContent className={style.cardcontent}>
      <Typography gutterBottom variant="h5" component="h2">
        Home
      </Typography>
        ..Minim ipsum Lorem veniam esse do. Lorem est proident ullamco commodo
        proident qui minim. Quis deserunt dolor in nulla amet duis enim cillum
        pariatur magna dolore. In anim aliqua non minim dolor. Commodo velit
        dolore qui exercitation anim ea minim laboris pariatur enim anim
        reprehenderit in. `` Qui sit nisi aliquip quis sit qui aliqua ea
        occaecat adipisicing.
      </CardContent>
      </Card>
      <Button variant="contained" color="primary">
        Primary
      </Button>
    </div>
  );
}
