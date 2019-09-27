---
title: Deleting a Site on Pantheon
description: Information on removing a Drupal or WordPress site from Pantheon.
tags: [manage]
categories: []
---
At some point, you may need or want to delete one of your sites on Pantheon. The number of free sites you can create is increased after a free site is deleted, or after it has converted to a paid plan.

<Alert title="Warning" type="danger">

This action is permanent and irreversible. Export any needed content, code, or files from the site before starting this operation.

Before deleting a site, you must downgrade the site plan to Sandbox level. See [Manage Site Plans](/site-plan/) for more information.

</Alert>

## Delete a Site Using the Pantheon Site Dashboard
1. Select **Settings** > **Delete Site**.
2. Click the **Delete Site** button.

  ![Site Dashboard Operations Delete Site](../images/dashboard/delete-site.png)

3. Enter the site title; this ensures you're aware of the site you're deleting.
4. Click **Delete**.

  ![Site Dashboard Operations Delete Site Confirm](../images/dashboard/delete-site-confirm.png)

## Delete a Site From the Organization Dashboard

1. Select the checkbox next to the site you want to delete.
2. Click **Operations**, and select **Delete Site**.

  ![Organization Dashboard Operations Delete Site](../images/dashboard/org-delete-site.png)

3. Type **Delete**.
4. Click **Delete Site(s)**.

  ![Organization Dashboard Operations Delete Site Confirm](../images/dashboard/org-delete-site-confirm.png)


## Delete a Site with Terminus
Run the following [Terminus](/terminus/) command:

```bash
terminus site:delete <site>
```

<Alert title="Note" type="info">

Replace `<site>` with your site name. You can see a list of all your sites by running `terminus site:list`.

</Alert>

  ![Delete Site via Terminus](../images/delete-site-terminus.png)

## Delete a Multidev Environment
Refer to the [Delete a Branch Environment](/multidev#delete-a-branch-environment) section of our Multidev guide for more information.
