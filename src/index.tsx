// This is your entry file! Refer to it when you render:

import { registerRoot } from 'remotion'
import { RemotionVideo } from './Video'
import { fontLoader } from '../public/fonts'

registerRoot(RemotionVideo)

// **** This function will load fonts ****
fontLoader()
