import React from 'react';

import Badge from './Badge';

const Badgetest = () => {
  return (
    <div className="">
      <div className=" flex flex-col gap-4">
        <h3>With border</h3>
        <div className="flex gap-4">
          <Badge tone="primary">42</Badge>
          <Badge tone="secondary">42</Badge>
          <Badge tone="success">42</Badge>
          <Badge tone="danger">42</Badge>
          <Badge tone="warning">42</Badge>
          <Badge tone="info">42</Badge>
        </div>
      </div>
      <div className=" flex flex-col gap-4">
        <h3>Pill with border</h3>
        <div className="flex gap-4">
          <Badge shape="pill" tone="primary">
            42
          </Badge>
          <Badge shape="pill" tone="secondary">
            42
          </Badge>
          <Badge shape="pill" tone="success">
            42
          </Badge>
          <Badge shape="pill" tone="danger">
            42
          </Badge>
          <Badge shape="pill" tone="warning">
            42
          </Badge>
          <Badge shape="pill" tone="info">
            42
          </Badge>
        </div>
      </div>
      <div className=" flex flex-col gap-4">
        <h3>Square with border</h3>
        <div className="flex gap-4">
          <Badge shape="square" tone="primary">
            42
          </Badge>
          <Badge shape="square" tone="secondary">
            42
          </Badge>
          <Badge shape="square" tone="success">
            42
          </Badge>
          <Badge shape="square" tone="danger">
            42
          </Badge>
          <Badge shape="square" tone="warning">
            42
          </Badge>
          <Badge shape="square" tone="info">
            42
          </Badge>
        </div>
      </div>
      <div className=" flex flex-col gap-4">
        <h3>Flat</h3>
        <div className="flex gap-4">
          <Badge border="border-none" tone="primary">
            42
          </Badge>
          <Badge border="border-none" tone="secondary">
            42
          </Badge>
          <Badge border="border-none" tone="success">
            42
          </Badge>
          <Badge border="border-none" tone="danger">
            42
          </Badge>
          <Badge border="border-none" tone="warning">
            42
          </Badge>
          <Badge border="border-none" tone="info">
            42
          </Badge>
        </div>
      </div>
      <div className=" flex flex-col gap-4">
        <h3>Flat pill</h3>
        <div className="flex gap-4">
          <Badge border="border-none" shape="pill" tone="primary">
            42
          </Badge>
          <Badge border="border-none" shape="pill" tone="secondary">
            42
          </Badge>
          <Badge border="border-none" shape="pill" tone="success">
            42
          </Badge>
          <Badge border="border-none" shape="pill" tone="danger">
            42
          </Badge>
          <Badge border="border-none" shape="pill" tone="warning">
            42
          </Badge>
          <Badge border="border-none" shape="pill" tone="info">
            42
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default Badgetest;
