import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from 'reactstrap';
import { fetchCampaigns } from 'store/actions/campaignActions';

const CampaignList = () => {
  const dispatch = useDispatch();
  const { campaigns, loading, error } = useSelector(state => state.campaigns);
  console.log("camp", campaigns);

  useEffect(() => {
    dispatch(fetchCampaigns());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="content">
        <Row>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardHeader>
                <CardTitle tag="h4">Campaigns</CardTitle>
              </CardHeader>
              <CardBody>
                <div>
                  <ul>
                    {campaigns?.map(campaign => (
                      <li key={campaign.CampaignID}>{campaign.CampaignName}</li>
                    ))}
                  </ul>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default CampaignList;
