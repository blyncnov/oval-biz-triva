import axios from 'axios';
import { HMSReactiveStore } from '@100mslive/hms-video-store';

const FUNCTION_BASE_URL = 'https://oval-api.com';
const hmsManager = new HMSReactiveStore();

// store will be used to get any state of the room
// actions will be used to perform an action in the room
export const hmsStore = hmsManager.getStore();
export const hmsActions = hmsManager.getActions();

export const fetchToken = async (userName, roomName) => {
  try {
    // create or fetch the room_id for the passed in room
    const { data: room } = await axios.post(
      `${FUNCTION_BASE_URL}/createRoom`,
      { room: roomName },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    // Generate the app/authToken
    const { data: token } = await axios.post(
      `${FUNCTION_BASE_URL}/generateAppToken`,
      {
        user_id: userName,
        room_id: room.id,
        role: 'host'
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    return token;
  } catch (error) {
    console.error(error);
  }
};
