import{T as i,B as n}from"./index.ae27f545.js";import{C as o}from"./ComponentInfo.6103a8aa.js";import{d as t}from"./vendor.6d0a7b46.js";import"./copyText.3f9916b4.js";import"./PaperCode.139f695a.js";function e(){return t(n,{sx:{width:"100%",maxWidth:500},get children(){return[t(i,{variant:"h1",component:"div",gutterBottom:!0,children:"h1. Heading"}),t(i,{variant:"h2",gutterBottom:!0,component:"div",children:"h2. Heading"}),t(i,{variant:"h3",gutterBottom:!0,component:"div",children:"h3. Heading"}),t(i,{variant:"h4",gutterBottom:!0,component:"div",children:"h4. Heading"}),t(i,{variant:"h5",gutterBottom:!0,component:"div",children:"h5. Heading"}),t(i,{variant:"h6",gutterBottom:!0,component:"div",children:"h6. Heading"}),t(i,{variant:"subtitle1",gutterBottom:!0,component:"div",children:"subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur"}),t(i,{variant:"subtitle2",gutterBottom:!0,component:"div",children:"subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur"}),t(i,{variant:"body1",gutterBottom:!0,children:"body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."}),t(i,{variant:"body2",gutterBottom:!0,children:"body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."}),t(i,{variant:"button",sx:{display:"block"},gutterBottom:!0,children:"button text"}),t(i,{variant:"caption",sx:{display:"block"},gutterBottom:!0,children:"caption text"}),t(i,{variant:"overline",sx:{display:"block"},gutterBottom:!0,children:"overline text"})]}})}e.code=`import Box from "@suid/material/Box";
import Typography from "@suid/material/Typography";

export default function Types() {
  return (
    <Box sx={{ width: "100%", maxWidth: 500 }}>
      <Typography variant="h1" component="div" gutterBottom>
        h1. Heading
      </Typography>
      <Typography variant="h2" gutterBottom component="div">
        h2. Heading
      </Typography>
      <Typography variant="h3" gutterBottom component="div">
        h3. Heading
      </Typography>
      <Typography variant="h4" gutterBottom component="div">
        h4. Heading
      </Typography>
      <Typography variant="h5" gutterBottom component="div">
        h5. Heading
      </Typography>
      <Typography variant="h6" gutterBottom component="div">
        h6. Heading
      </Typography>
      <Typography variant="subtitle1" gutterBottom component="div">
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>
      <Typography variant="subtitle2" gutterBottom component="div">
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>
      <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="body2" gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="button" sx={{ display: "block" }} gutterBottom>
        button text
      </Typography>
      <Typography variant="caption" sx={{ display: "block" }} gutterBottom>
        caption text
      </Typography>
      <Typography variant="overline" sx={{ display: "block" }} gutterBottom>
        overline text
      </Typography>
    </Box>
  );
}
`;function d(){return t(o,{get name(){return i.name},examples:[e]})}export{d as default};
