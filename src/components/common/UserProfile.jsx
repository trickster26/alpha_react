import React, { useState, useEffect } from 'react';
import { Avatar, Box, Typography, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import dashboardService from '../../services/dashboard.service';

function UserProfile() {
  const [userData, setUserData] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await dashboardService.getUserProfile();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  if (!userData) {
    return null;
  }

  // Generate avatar text from name
  const getAvatarText = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <Box 
      onClick={handleClick}
      sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        cursor: 'pointer',
        p: 1,
        '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' },
        borderRadius: 1
      }}
    >
      <Avatar
        sx={{ 
          bgcolor: 'primary.main',
          width: 40,
          height: 40
        }}
        src={userData.avatarUrl || null}
      >
        {!userData.avatarUrl && getAvatarText(userData.name)}
      </Avatar>
      <Box sx={{ ml: 2 }}>
        <Typography variant="subtitle2" color="white">
          {userData.name}
        </Typography>
        <Typography variant="caption" color="gray">
          {userData.email}
        </Typography>
      </Box>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={() => { handleClose(); navigate('/dashboard/profile'); }}>
          Profile
        </MenuItem>
        <MenuItem onClick={() => { handleClose(); navigate('/dashboard/settings'); }}>
          Settings
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default UserProfile; 