import { expect } from "chai";
import { describe, it } from "mocha";
import { ethers } from "hardhat";

describe("Post", function () {
  it("Should return the new post", async function () {
    const Post = await ethers.getContractFactory("Post");
    const post = await Post.deploy();
    await post.deployed();
    expect(await post.createPost("Hello World")).to.equal("Hello World");
  });
});
