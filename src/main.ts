
import Gio from 'gi://Gio';
import GLib from 'gi://GLib';

import Log from '@logger';
import DBusRegistrar from '@dbus';



// -- Create a new main loop
const main = new GLib.MainLoop(null, false);



const dbus = DBusRegistrar.getInstance();
dbus.acquire_bus();


// -- Run the main loop
main.run();