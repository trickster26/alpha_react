import React from 'react';
import { Link } from 'react-router-dom';

function BillingSection() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-neutral-900 dark:text-white">
          Current Plan
        </h3>
        <div className="mt-4 p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-neutral-900 dark:text-white">
                Pro Plan
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                $49/month
              </p>
            </div>
            <Link
              to="/pricing"
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              View Plans
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BillingSection; 