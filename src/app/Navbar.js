import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { fetchNotifiations, selectAllNotifications } from '../features/notifications/notificationsSlice';

export const Navbar = () => {
  const dispatch = useDispatch();
  const notifications = useSelector(selectAllNotifications);
  const numUnreadNotifications = notifications.filter(n => !n.read).length;

  const fetchNewNotifications = () => {
    dispatch(fetchNotifiations())
  }

  let unreadNotificationsBadge;
  if (numUnreadNotifications > 0) {
    unreadNotificationsBadge = <span className="badge">{numUnreadNotifications}</span>;
  }

  return (
    <nav>
      <section>
        <h1>Redux Essentials Example</h1>

        <div className="navContent">
          <div className="navLinks">
            <Link to="/">Posts</Link>
            <Link to="/users">Users</Link>
            <Link to="/notifications">Notifications {unreadNotificationsBadge}</Link>
          </div>
          <button className="button" onClick={fetchNewNotifications}>
            Refresh notifications
          </button>
        </div>
      </section>
    </nav>
  )
}
