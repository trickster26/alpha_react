import React from 'react';
import { Box, Skeleton, Container } from '@mui/material';

const SkeletonLoader = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ pt: 3 }}>
        {/* Header Skeleton */}
        <Skeleton variant="rectangular" width="100%" height={60} sx={{ mb: 2 }} />
        
        {/* Content Area Skeletons */}
        <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: 'repeat(12, 1fr)' }}>
          {/* Main Content */}
          <Box sx={{ gridColumn: 'span 8' }}>
            <Skeleton variant="rectangular" height={200} sx={{ mb: 2 }} />
            <Skeleton variant="rectangular" height={400} />
          </Box>
          
          {/* Sidebar */}
          <Box sx={{ gridColumn: 'span 4' }}>
            <Skeleton variant="rectangular" height={150} sx={{ mb: 2 }} />
            <Skeleton variant="rectangular" height={150} />
          </Box>
        </Box>
        
        {/* Bottom Section */}
        <Box sx={{ mt: 3 }}>
          <Skeleton variant="rectangular" height={100} />
        </Box>
      </Box>
    </Container>
  );
};

export default SkeletonLoader; 