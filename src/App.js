import './App.css';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
// import {AmplifyAuthenticator, AmplifySignOut} from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import { withAuthenticator } from '@aws-amplify/ui-react'

Amplify.configure(aws_exports);

const App = () => {
  return(
    <div>
      My App
    </div>
  )
    
  };
export default withAuthenticator(App);
